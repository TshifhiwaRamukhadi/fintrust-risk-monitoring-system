import FooterNavigation from "../components/FooterNavigation";

export default function Questions() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 15 of 16
      </div>

      <h1>
        Questions?
      </h1>

      <h2>
        Thank You For Your Attention
      </h2>

      <FooterNavigation
        previous="Conclusion"
        previousPath="/conclusion"
        next="Thank You"
        nextPath="/thank-you"
      />

    </div>
  );
}