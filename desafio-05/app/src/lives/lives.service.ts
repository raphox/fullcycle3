import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Live } from './live.entity';

@Injectable()
export class LivesService {
  constructor(
    @InjectRepository(Live)
    private readonly livesRepository: Repository<Live>,
  ) {}

  async findAll(): Promise<Live[]> {
    return this.livesRepository.find();
  }

  async findAllPrevious(): Promise<Live[]> {
    return this.livesRepository
      .createQueryBuilder('lives')
      .where("DATE(lives.publicated_at) < DATE('now')")
      .getMany();
  }

  async findAllNext(): Promise<Live[]> {
    return this.livesRepository
      .createQueryBuilder('lives')
      .where("DATE(lives.publicated_at) > DATE('now')")
      .getMany();
  }

  async findToday(): Promise<Live> {
    return this.livesRepository
      .createQueryBuilder('lives')
      .where("DATE(lives.publicated_at) = DATE('now')")
      .getOne();
  }

  findOne(id: string): Promise<Live> {
    return this.livesRepository.findOne(id);
  }
}