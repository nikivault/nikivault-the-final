/// <reference types="vite/client" />
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

type Tree = {
  path: string;
  children: Tree[];
  hasPage: boolean;
  isParam: boolean;
  paramName: string;
  isCatchAll: boolean;
};

function buildRouteTree(dir: string, basePath = ''): Tree {
  const files = readdirSync(dir);
  const node: Tree = {
    path: basePath,
    children: [],
    hasPage: false,
    isParam: false,
    isCatchAll: false,
    paramName: '',
  };

  const dirName = basePath.split('/').pop();
  if (dirName?.startsWith('[') && dirName.endsWith(']')) {
    node.isParam = true;
    const paramName = dirName.slice(1, -1);
    if (paramName.startsWith('...')) {
      node.isCatchAll = true;
      node.paramName = paramName.slice(3);
    } else {
      node.paramName = paramName;
    }
  }

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      const childPath = basePath ? `${basePath}/${file}` : file;
      node.children.push(buildRouteTree(filePath, childPath));
    } else if (file === 'page.jsx' || file === 'page.tsx' || file === 'page.ts' || file === 'page.jsx') {
      node.hasPage = true;
    }
  }
  return node;
}

function componentFilePath(p: string) {
  return p === '' ? `./page.jsx` : `./${p}/page.jsx`;
}

function segmentToPath(segment: string) {
  if (segment.startsWith('[') && segment.endsWith(']')) {
    const name = segment.slice(1, -1);
    if (name.startsWith('...')) return '*';
    if (name.startsWith('[') && name.endsWith(']')) return `:${name.slice(1, -1)}?`;
    return `:${name}`;
  }
  return segment;
}

/**
 * Produce objects expected by @react-router/dev / fs-routes plugin:
 * { index?: true, path?: string, file: './.../page.jsx' }
 * Use `any` to avoid strict RouteObject typing here.
 */
function generateRoutes(node: Tree): any[] {
  const out: any[] = [];

  if (node.hasPage) {
    const file = componentFilePath(node.path);
    if (node.path === '') {
      out.push({ index: true, file });
    } else {
      const segments = node.path.split('/');
      const processed = segments.map(segmentToPath).join('/');
      out.push({ path: processed, file });
    }
  }

  for (const child of node.children) out.push(...generateRoutes(child));
  return out;
}

if (import.meta.env.DEV) {
  // keep dev glob for HMR awareness
  import.meta.glob('./**/page.jsx', {});
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      import.meta.hot?.invalidate();
    });
  }
}

const tree = buildRouteTree(__dirname);
const routes = [...generateRoutes(tree)];

// add not-found file
routes.push({ path: '*', file: './__create/not-found.tsx' });

// export as any to match expected plugin shape
export default routes as any;
