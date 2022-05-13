const obj = {
  name: 'dengwj',
  friend: {
    name: 'xd',
    friends: {
      name: 'zww'
    }
  }
}

if (obj && obj.friend && obj.friend.friends) {
  console.log(obj.friend.friends.name);
}

console.log(obj.friend?.friends?.name); // 看是不是 null 或者 undefined，不是就展示，是就不会指行了