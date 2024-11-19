import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Highlight } from './highlights/property.entity';
import { HighlightsService } from './highlights/highlights.service';
import { HighlightsController } from './highlights/highlight.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Highlight],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Highlight]),
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService],
})
export class AppModule {}
