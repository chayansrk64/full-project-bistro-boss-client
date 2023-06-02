/**
 * 1. Install stripe and react stripe js
 * 2. Create a checkout form with card element (card element contains: card number,
 *  expiration date, cvs, zip code )
 * 3. Create account on stripe and get the publishable key pk (publishable key)
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment.
 * 7. on the server side: install stripe:
 * npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card']
 * make sure you provide amount in cents (multiply price with 100);
 * 
 * **/