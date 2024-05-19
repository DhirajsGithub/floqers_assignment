type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
    colorSecondary: string;
    backgroundColor: string;
    textColorPrimary: string;
    textColorSecondary: string;
    // colorBgContainer: string,
    borderColor: string;
    hoverColor: string;
    algorithm?: boolean;
  };
  
  const lightTheme: ThemeData = {
    borderRadius: 6,
    colorPrimary: '#1677ff',
    colorSecondary: '#ff7a59',
    backgroundColor: '#ffffff',
    // colorBgContainer: '#f6ffed',
    textColorPrimary: '#000000',
    textColorSecondary: '#555555',
    borderColor: '#e0e0e0',
    hoverColor: '#f5f5f5',
  };
  
  const darkTheme: ThemeData = {
    borderRadius: 6,
    colorPrimary: 'red',
    colorSecondary: '#fff',
    backgroundColor: '#141414',
    // colorBgContainer: '#f6ffed',
    textColorPrimary: '#ffffff',
    textColorSecondary: '#cccccc',
    borderColor: '#333333',
    hoverColor: '#1f1f1f',
    algorithm: true,
  };
  
  export { lightTheme, darkTheme };
  