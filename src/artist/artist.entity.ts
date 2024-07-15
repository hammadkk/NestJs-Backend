import { User } from '../users/user.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    () => User,
    (user) => {
      user.artist;
    },
  )
  @JoinColumn()
  user: User;
}
