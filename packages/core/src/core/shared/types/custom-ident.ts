import { RBType } from '.'

/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export class CustomIdent implements RBType<string> {
    data: string
    valueConstructor: Function
    serialize: () => string

    private constructor(data: string) {
        this.data = data
        this.valueConstructor = CustomIdent.ident
        this.serialize = () => this.data
    }
    /**
     * Constructs a value of type `CustomIdent`.
     */
    static ident(x: string): CustomIdent {
        return new CustomIdent(x)
    }
}

export const ident = CustomIdent.ident
