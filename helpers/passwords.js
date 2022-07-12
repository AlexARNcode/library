import bcrypt from 'bcrypt';

export function hashPassword(plainPassword) {
    const saltRounds = 10;
  
    return bcrypt.hashSync(plainPassword, saltRounds);
}

export default { hashPassword }