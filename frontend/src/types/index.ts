export type Database = import("./database").Database;

export type Category =
  Database["public"]["Tables"]["categories"]["Row"];

export type Product =
  Database["public"]["Tables"]["products"]["Row"];