import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../components/CoreConcept";
import Sections from "./Sections";

export default function CoreConcepts() {
  return (
    <Sections title="Core-Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </Sections>
  );
}
