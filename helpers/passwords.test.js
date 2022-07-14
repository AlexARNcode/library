import { comparePasswords } from "./passwords";

test('Plain password and hashed password are matching', () => {
    expect(comparePasswords("randomPassword123", "$2b$10$9VepmQP47GHeNFSCdjBtGevhwtNm8tWQvb1SHQTGFZiKxJEmWMLXq"))
    .toEqual(true)
})

test('Plain password and hashed password are not matching', () => {
    expect(comparePasswords("randomPasswsdfsdford123", "$2b$10$9VepmQP47GHeNFSCdjBtGevhwtNm8tWQvb1SHQTGFZiKxJEmWMLXq"))
    .toEqual(false)
})

