export async function GET() {
  const blogs = [
    {
      id: 1,
      title: 'Backpacking through Europe',
      content: 'An exciting trip through France, Germany, and Italy...',
    },
    {
      id: 2,
      title: 'Budget Travel in Southeast Asia',
      content: 'Affordable travel tips in Thailand, Vietnam, and Cambodia...',
    },
  ];

  return Response.json(blogs);
}
