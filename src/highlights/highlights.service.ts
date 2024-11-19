import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Highlight } from './property.entity';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
  ) {}

  findAll() {
    return this.highlightRepository.find({ order: { order: 'ASC' } });
  }

  create(data: Partial<Highlight>) {
    return this.highlightRepository.save(data);
  }

  async update(id: string, data: Partial<Highlight>) {
    await this.highlightRepository.update(id, data);
    return this.highlightRepository.findOneBy({ id });
  }

  delete(id: string) {
    return this.highlightRepository.delete(id);
  }

  async reorder(data: Highlight[]) {
    for (const [index, highlight] of data.entries()) {
      await this.highlightRepository.update(highlight.id, { order: index });
    }
    return this.findAll();
  }
}
