import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../shared/services/database/db.service';
import { Prisma } from '@prisma/client';
import { OrderBy } from 'src/models/graphql';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';

@Injectable()
export class UsersService {
  constructor(
    private db: DatabaseService
  ) {}

  create(createUserInput: UserCreateInput) {
    return this.db.user.create({
      data: createUserInput
    });
  }

  findAll(orderBy?: OrderBy) {
    orderBy = orderBy || { field: "createdAt", dir: 'desc' };
    return this.db.user.findMany({
      orderBy: { [orderBy.field]: orderBy.dir }
    });
  }

  findOne(query: Prisma.UserWhereUniqueInput) {
    return this.db.user.findUnique({
      where: query
    });
  }

  update(id: string, updateUserInput: UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
