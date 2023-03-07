
type ButtonProps = {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;

}

export default function Button({ color = 'default', className, disabled, ...rest }: ButtonProps) {

switch (color) {
  case 'default': {
        className = `${className} bg-gray-500 hover:bg-gray-600 text-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-gray-500'}`;
    }break;
  case 'primary': {
        className = `${className} bg-blue-500 hover:bg-blue-600 text-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-blue-500'}`;
  }break;
  case 'secondary': {
        className = `${className} bg-green-500 hover:bg-green-600 text-white ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-green-500'}`;
  }break;
}

    return (
        <div>
        <button className={className} {...rest}>{rest.children}</button>
        </div>

    );
 }
