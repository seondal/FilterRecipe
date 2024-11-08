import { CATEGORY } from "@/constants";

export default function Category() {
  return (
    <article className="grid">
      {CATEGORY.map((main, idx) => (
        <div key={idx}>
          <label>
            <input type="checkbox" name="main" />
            <strong>{main.text}</strong>
          </label>
          {main.sub.map((sub, idx) => (
            <label key={idx}>
              <input type="checkbox" name="sub" />
              {sub}
            </label>
          ))}
        </div>
      ))}
    </article>
  );
}
