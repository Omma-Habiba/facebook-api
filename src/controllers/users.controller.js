import * as ProfileModel from '../models/profiles.model';

// update a User's profile    
export const updateOneProfile = async (request, response) => {
    const { firstName, lastName } = request.body;
    const { id } = request.params;

    const profile = await ProfileModel.createProfile({
        firstName: firstName,
        lastName: lastName,
        userId: id
    });

    response.status(201).json(profile);
}

// return a User's profile  OKKK
export const findOneProfile = async (request, response) => {
    const id = request.params.id;
    response.json({
      profile: await ProfileModel.findOneProfile(id)
    });
}

// delete an user by it's id
export const deleteOneProfile = async (request, response) => {
  const id = request.params.id;
  await ProfileModel.deleteOneProfile(id);
  await ProfileModel.deleteProfilePosts(id);

  const profile = await ProfileModel.deleteUserById(id);

  response.status(201).json({});
}

// return a list of User's posts
export const findAllPosts = async (request, response) => {
    const id = request.params.id;
    response.json({
        posts: await ProfileModel.findAllPosts(id)
    })
}

