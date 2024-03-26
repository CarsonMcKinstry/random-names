import * as generators from './generators';

type GeneratorNamespaces = typeof generators;

export const loadGenerator = <Namespace extends keyof GeneratorNamespaces>(namespace: Namespace, generator: keyof GeneratorNamespaces[Namespace]) => {
    return generators[namespace][generator] as () => string;
}

export const generate = <Namespace extends keyof GeneratorNamespaces>(namespace: Namespace, generator: keyof GeneratorNamespaces[Namespace]) => {
    return loadGenerator(namespace, generator)();
}