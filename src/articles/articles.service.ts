import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({data: createArticleDto});
  }

  findAll() {
    return this.prisma.article.findMany({where:{published: true}})
  }

  findAllDrafts() {
    return this.prisma.article.findMany({where:{published: false}})
  }

  async findOne(id: number) {
    return this.prisma.article.findUnique({where:{id}});
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {id},
      data: updateArticleDto
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({where: {id}})
  }
}
