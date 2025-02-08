import {TransactionItem} from '../components/Transactions/types';

export const DummyExpenses = [
  {value: 430, color: '#bc438a', category: 'საბანკო ოპერაციები'},
  {value: 1123, color: '#00c0b3', category: 'გადასახადები და კომუნალურები'},
  {value: 185, color: '#fec100', category: 'კვება'},
  {value: 321, color: '#00b0f8', category: 'საყიდლები'},
];

export const DummyIncomeList: TransactionItem[] = [
  {
    id: 1,
    name: 'პირადი გადარიცხვა',
    category: 'პირადი გადარიცხვა',
    value: 5000,
    date: '27 იან, 2025, 00:20PM',
    type: 'შემოსავლები',
    senderName: 'ნიკა ჭეიშვილი',
    senderAcc: 'GB142334162213317765',
    senderBank: 'ტერაბანკი',
    reciever: 'არჩილი ახვლედიანი',
    recieverAcc: 'GB142334162213317765',
    recieverBank: 'ტერაბანკი',
    payType: 'ჩარიცხვა',
    description: 'პირადი გადარიცხვა',
    docNumber: '12344321321',
  },
  {
    name: 'ხელფასი',
    category: 'ხელფასი',
    value: 2000,
    id: 2,
    date: '10 დეკ, 2024, 12:20PM',
    type: 'შემოსავლები',
    senderName: 'შპს ტერაბანკი',
    senderAcc: 'GB142334162213317765',
    senderBank: 'ტერაბანკი',
    reciever: 'არჩილი ახვლედიანი',
    recieverAcc: 'GB142334162213317765',
    recieverBank: 'ტერაბანკი',
    payType: 'ჩარიცხვა',
    description: 'ხელფასი',
    docNumber: '12344321321',
  },
];
export const DummyExpensesList: TransactionItem[] = [
  {
    name: 'რონის პიცა',
    category: 'კვება',
    value: -100,
    id: 3,
    date: '8 აგვ, 2024, 12:20PM',
    type: 'გადარიცხვები',
    senderName: 'არჩილი ახვლედიანი',
    senderAcc: 'GB142334162213317765',
    senderBank: 'ტერაბანკი',
    reciever: 'შპს რონის პიცა',
    recieverAcc: 'GB142334162213317765',
    recieverBank: 'ტერაბანკი',
    payType: 'გადახდა',
    description: 'გადახდა',
    docNumber: '12344321321',
  },
  {
    name: 'პირადი გადარიცხვა',
    category: 'პირადი გადარიცხვა',
    value: -500,
    id: 4,
    date: '9 სექ, 2024, 12:20PM',
    type: 'გადარიცხვები',
    senderName: 'არჩილი ახვლედიანი',
    senderAcc: 'GB142334162213317765',
    senderBank: 'ტერაბანკი',
    reciever: 'ნიკა ჭეიშვილი',
    recieverAcc: 'GB142334162213317765',
    recieverBank: 'ტერაბანკი',
    payType: 'პირადი გადარიცხვა',
    description: 'პირადი გადარიცხვა',
    docNumber: '12344321321',
  },
];

export const DummyCategories = [
  {
    category: 'კვება',
    img: 'https://img.icons8.com/?size=100&id=Q2fre4pbJjTx&format=png&color=000000',
  },
  {
    category: 'ფინანსები',
    img: 'https://img.icons8.com/?size=100&id=VbL8v3mm1qyp&format=png&color=000000',
  },
  {
    category: 'პირადი გადარიცხვა',
    img: 'https://img.icons8.com/?size=100&id=w9CgCGrxafL1&format=png&color=000000',
  },
  {
    category: 'ხელფასი',
    img: 'https://img.icons8.com/?size=100&id=HNZ1FY24twH0&format=png&color=000000',
  },
];

export const DummyType = [
  {
    type: 'შემოსავლები',
    img: 'https://img.icons8.com/?size=100&id=36950&format=png&color=000000',
  },
  {
    type: 'გადარიცხვები',
    img: 'https://img.icons8.com/?size=100&id=vQWjdsqdjUIf&format=png&color=000000',
  },
];
