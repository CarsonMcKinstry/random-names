import * as generators from './generators';

type GeneratorNamespaces = typeof generators;

export const loadGenerator = <Namespace extends keyof typeof generators>(namespace: Namespace, generator: keyof GeneratorNamespaces[Namespace]) => {
    return generators[namespace][generator];
}


