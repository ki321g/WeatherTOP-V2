import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("users");

/**
 * This class handles things related to the User Store
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const userStore = {
  /*
   * Get All USERS from the store
   */
  async getAllUsers() {
    await db.read();
    return db.data.users;
  },
  /*
   * Add USERS to the store
   */
  async addUser(user) {
    await db.read();
    user._id = v4();
    db.data.users.push(user);
    await db.write();
    return user;
  },
  /*
   * Get User by ID from the store
   */
  async getUserById(id) {
    await db.read();
    return db.data.users.find((user) => user._id === id);
  },
  /*
   * Get User by EMAIL from the store
   */
  async getUserByEmail(email) {
    await db.read();
    return db.data.users.find((user) => user.email === email);
  },
  /*
   * Delete User by ID from the store
   */
  async deleteUserById(id) {
    await db.read();
    const index = db.data.users.findIndex((user) => user._id === id);
    db.data.users.splice(index, 1);
    await db.write();
  },
  /*
   * Delete all Users from the store
   */
  async deleteAll() {
    db.data.users = [];
    await db.write();
  },

  /*
   * Update Reading in the store
   */
  async updateUser(userId, updateUser) {    
    const user = await this.getUserById(userId);
    user.firstname = updateUser.firstname;
    user.lastname = updateUser.lastname;
    user.password = updateUser.password;
    await db.write();
  },
};