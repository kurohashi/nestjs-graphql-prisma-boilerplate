import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Direction')
export class DirScalar implements CustomScalar<"desc" | "asc", "desc" | "asc"> {
    description = 'Direction custom scalar type';

    parseValue(value: any): "desc" | "asc" {
        return this.logic(value); // value from the client
    }

    serialize(value: any): "desc" | "asc" {
        return this.logic(value); // value sent to the client
    }

    parseLiteral(ast: ValueNode): "desc" | "asc" {
        if (ast.kind == Kind.STRING)
            return this.logic(ast.value);
        return 'desc';
    }

    private logic(val: any): "desc" | "asc" {
        if (typeof val !== "string")
            val = val.toString();
        if (["desc", "asc"].includes(val))
            return val;
        return "desc";
    }
}