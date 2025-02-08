import {DummyCategories, DummyType} from '../assets/dummy';

export const getCategoryImage = (category: string) => {
  const foundCategory = DummyCategories.find(
    item => item.category === category,
  );
  return foundCategory
    ? foundCategory.img
    : 'https://img.icons8.com/?size=100&id=dF4LRqsPnaM1&format=png&color=000000';
};

export const getTypeImage = (type: string) => {
  const foundType = DummyType.find(item => item.type === type);
  return foundType
    ? foundType.img
    : 'https://img.icons8.com/?size=100&id=dF4LRqsPnaM1&format=png&color=000000';
};
