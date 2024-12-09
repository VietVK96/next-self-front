import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: 4,
  '&.Mui-checked': {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), linear-gradient(310deg, rgb(17, 113, 239), rgb(17, 205, 239))`,
    borderColor: 'rgb(17, 205, 239)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));
export default CustomCheckbox
