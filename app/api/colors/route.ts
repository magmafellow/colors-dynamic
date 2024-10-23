export async function GET() {
  // Наши цвета, которые мы получаем через запрос
  const colors = {
    v1: {
      primaryColorBg: '#fcba03',
      primaryColorBgHover: '#6e530a',
      primaryColor: '#144d17',
      primaryColorHover: '#eee',
    },
    v2: {
      primaryColorBg: '#9cffa2',
      primaryColorBgHover: '#79d17f',
      primaryColor: '#22a32b',
      primaryColorHover: '#1b6620',
    }
  }

  console.log('was activated')
  
  return Response.json({ data: colors })
}
