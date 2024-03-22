import { lib1 } from '@nx-invalid-graph/lib-1';

export function lib2(): string {
  return lib1() + 'lib-2';
}
