import {
  DataType,
  Table,
  Model,
  AutoIncrement,
  AllowNull,
  PrimaryKey,
  Column,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: false,
})
export class Products extends Model {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  category: string;

  @AllowNull(false)
  @Unique(true)
  @Column({
    type: DataType.STRING,
  })
  itemId: string;

  @AllowNull(false)
  @Unique(true)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  screen: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  capacity: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  ram: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  image: string;
}
