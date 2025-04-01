import { Prisma } from '@prisma/client';

export const createUserSelect: Prisma.UserSelect = {
  id: true,
  name: true,
  email: true,
  countryCode: true,
  phoneNumber: true,
  gender: true,
};

export const userSelect: Prisma.UserSelect = {
  id: true,
  name: true,
  phoneNumber: true,
  role: {
    select: {
      id: true,
      name: true,
      permissions: {
        select: {
          name: true,
        },
      },
    },
  },
};

export const actorSelect: Prisma.ActorSelect = {
  id: true,
  name: true,
  gender: true,
  dob: true,
  biography: true,
};

export const movieShowSelect: Prisma.MovieShowSelect = {
  id: true,
  title: true,
  description: true,
  releaseDate: true,
  type: true,
  duration: true,
  actors: {
    select: {
      name: true,
    },
  },
  genre: {
    select: {
      genreType: true,
    },
  },
};

export const genreSelect: Prisma.GenreSelect = {
  id: true,
  genreType: true,
};

export const reviewSelect: Prisma.ReviewSelect = {
  id: true,
  User: {
    select: {
      id: true,
      name: true,
    },
  },
  MovieShow: {
    select: {
      title: true,
      description: true,
      releaseDate: true,
      type: true,
      duration: true,
    },
  },
  reviewContent: true,
  rating: true,
};
