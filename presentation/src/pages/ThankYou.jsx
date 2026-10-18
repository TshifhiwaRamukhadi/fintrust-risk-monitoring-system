import FooterNavigation from "../components/FooterNavigation";

export default function ThankYou() {
  return (
    <div className="slide">

      <div className="slide-number">
        Slide 15 of 15
      </div>

      <h1>
        Thank You
      </h1>

      <FooterNavigation
        previous="Questions"
        previousPath="/questions"
        next={null}
        nextPath={null}
      />

    </div>
  );
}