import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe, UseFilters } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('articles')
@ApiTags('articles')
@UseFilters(PrismaClientExceptionFilter)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({type: ArticleEntity})
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse({type: ArticleEntity, isArray: true})
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('drafts')
  @ApiCreatedResponse({type: ArticleEntity, isArray: true})
  findAllDrafts() {
    return this.articlesService.findAllDrafts();
  }

  @Get(':id')
  @ApiCreatedResponse({type: ArticleEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const article = await this.articlesService.findOne(id)
    if (!article) {
      throw new NotFoundException(`article #${id} is not found.`)
    }
    return article;
  }

  @Patch(':id')
  @ApiCreatedResponse({type: ArticleEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({type: ArticleEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.remove(id);
  }
}
