interface Avatar {
    id: number;
    high: string;
    medium: string;
    low: string;
  }

export type User = {
    email: string;
    password: string;
    name?: string;
    avatar?: Avatar | null;

}