import { gql } from 'apollo-server';
import { Photo, Project } from '../../portfolio/interfaces';
import { PhotoFinder, ProjectFinder, TagFinder } from '../../portfolio/finders';

export const typeDefs = gql`

  type Photo {
    uuid: String!
    title: String
    description: String
    src: String
    tags: [Tag]
  }

  type Project {
    uuid: String!
    title: String
    description: String
    tags: [Tag]
  }

  type Tag {
    uuid: String!
    title: String
  }

  type Query {
    photos: [Photo]
    photo(uuid: String!): Photo
    projects: [Project]
    project(uuid: String!): Project
    tags: [Tag]
    tag(uuid: String!): Tag
  }

`;

export const resolvers = {

  Query: {

    // Photos
    photos: () => PhotoFinder.getPhotos(),
    photo: (_, args) => PhotoFinder.getPhotoByUuid(args.uuid),

    // Projects
    projects: () => ProjectFinder.getProjects(),
    project: (_, args) => ProjectFinder.getProjectByUuid(args.uuid),

    // Tags
    tags: () => TagFinder.getTags(),
    tag: (_, args) => TagFinder.getTagByUuid(args.uuid),

  },

  Photo: {
    tags: (photo: Photo) => TagFinder.getTagsByUuids(photo.tags),
  },

  Project: {
    tags: (project: Project) => TagFinder.getTagsByUuids(project.tags),
  },

};
