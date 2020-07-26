const apiKey = '17504115-e1f4917cce04b285bef9ea485';
const baseUrl = 'https://pixabay.com/api/';
let pageNumber = 1;
export const apiServiseceFunk = search => {
  return fetch(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${search}&page=${pageNumber}&per_page=5&key=${apiKey}`,
    {
      credentials: 'same-origin',
    },
  )
    .then(res => {
      return res.json();
    })
    .then(res => res.hits)
    .then(res => {
      pageNumber += 1;
      return res;
    })
    .catch(error => console.log(error));
};

export const resetPage = () => {
  pageNumber = 1;
};
