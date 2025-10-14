import TestimonialCard from '../TestimonialCard';
import farmerImg from '@assets/stock_images/indonesian_farmer_sm_2e9edef6.jpg';

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="Budi Santoso"
        location="Subang, Jawa Barat"
        testimonial="Mesin pemanen yang saya beli sangat membantu meningkatkan produktivitas sawah saya. Pelayanan sangat memuaskan!"
        image={farmerImg}
      />
    </div>
  );
}
