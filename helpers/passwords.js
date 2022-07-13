import bcrypt from 'bcrypt';

export function hashPassword(plainPassword) {
    const saltRounds = 10;
  
    return bcrypt.hashSync(plainPassword, saltRounds);
}

export function comparePasswords(userSentPassword, userPasswordInDb) {
    return bcrypt.compareSync(userSentPassword, userPasswordInDb)
}

export default { hashPassword, comparePasswords }