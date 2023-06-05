import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/models/graphql.ts'),
    outputAs: 'class',
    watch: false,    // Make it true to watch the changes in the graphql types
    emitTypenameField: true,
});