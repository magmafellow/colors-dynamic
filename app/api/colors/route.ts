export async function GET() {
  // Наши цвета, которые мы получаем через запрос
  const colors = {
    primaryColorBg: '#fcba03',
    primaryColorBgHover: '#6e530a',
    primaryColor: '#144d17',
    primaryColorHover: '#eee',
  }

  console.log('was activated')
  
  return Response.json({ data: colors })
}
