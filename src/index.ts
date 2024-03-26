import * as _generators from './generators';

type GeneratorNamespaces = typeof _generators;

export const loadGenerator = <Namespace extends keyof GeneratorNamespaces>(namespace: Namespace, generator: keyof GeneratorNamespaces[Namespace]) => {

    if (!(namespace in _generators)) {
        throw new Error(`Namespace "${namespace}" not available`);
    }

    if (!(generator in _generators[namespace])) {
        throw new Error(`Generator "${generator as string}" not available in namespace "${namespace}"`);
    }

    return _generators[namespace][generator] as () => string;
}

export const generate = <Namespace extends keyof GeneratorNamespaces>(namespace: Namespace, generator: keyof GeneratorNamespaces[Namespace]) => {
    return loadGenerator(namespace, generator)();
}

export const namespaces = Object.entries(_generators)
    .reduce((acc, [key, value]) => {

        const keys = Object.keys(value);

        acc[key] = keys;

        return acc;
    }, {});