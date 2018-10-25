const apiKey = 'rmuMfQkif5Ff4EW96K_VCdmBnXKwIWYQRrGsecB0JgLrjN04xHIR9yYFKQ6T2Ff5TTw7-yDgdDvzIwrv5uX-eIjQevHCAcI43c1Gx-H4UV43ADbOf2gNEITPOrSkWnYx';
export const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://infinite-forest-26068.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          phone: business.phone,
          distance: business.distance,
          url: business.url
        }));
      }
    });
  }
};
