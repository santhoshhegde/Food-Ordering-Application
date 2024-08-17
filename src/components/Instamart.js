import { useState } from "react";

const Section = ({ title, discription, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      {isVisible ? (
        <>
          <button
            className="underline"
            onClick={() => {
              setIsVisible("");
            }}
          >
            Hide
          </button>
          <p>{discription}</p>
        </>
      ) : (
        <button
          className="underline"
          onClick={() => {
            setIsVisible(title);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisible, setIsVisible] = useState("");
  return (
    <div>
      <Section
        title="About"
        isVisible={isVisible == "About"}
        setIsVisible={setIsVisible}
        discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        a ea voluptatum nemo vero culpa cum distinctio illo. Expedita quo
        aspernatur, maxime quasi nesciunt, et, corporis quaerat magni est
        deleniti placeat quisquam nisi odit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dignissimos cumque, sunt nam quo, in esse
        magni porro eos rerum nostrum beatae eum laboriosam, dolorem quidem
        voluptatum harum qui! Cumque itaque placeat dignissimos iure quasi
        officia? Possimus fugit earum distinctio, necessitatibus laborum harum
        molestias doloribus dignissimos iste quaerat quia architecto deleniti
        veniam magni, totam ut consequatur! Labore illo exercitationem soluta
        numquam. Delectus quis asperiores minima eius et aspernatur similique,
        id ad veritatis fugiat debitis, labore, accusantium distinctio nulla
        aperiam ratione officiis dolores nostrum placeat quibusdam temporibus.
        Ad, accusamus provident maxime, sapiente itaque labore molestias ex
        repudiandae aspernatur sed repellat quae tenetur."
      />
      <Section
        title="Contact"
        isVisible={isVisible == "Contact"}
        setIsVisible={setIsVisible}
        discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        a ea voluptatum nemo vero culpa cum distinctio illo. Expedita quo
        aspernatur, maxime quasi nesciunt, et, corporis quaerat magni est
        deleniti placeat quisquam nisi odit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dignissimos cumque, sunt nam quo, in esse
        magni porro eos rerum nostrum beatae eum laboriosam, dolorem quidem
        voluptatum harum qui! Cumque itaque placeat dignissimos iure quasi
        officia? Possimus fugit earum distinctio, necessitatibus laborum harum
        molestias doloribus dignissimos iste quaerat quia architecto deleniti
        veniam magni, totam ut consequatur! Labore illo exercitationem soluta
        numquam. Delectus quis asperiores minima eius et aspernatur similique,
        id ad veritatis fugiat debitis, labore, accusantium distinctio nulla
        aperiam ratione officiis dolores nostrum placeat quibusdam temporibus.
        Ad, accusamus provident maxime, sapiente itaque labore molestias ex
        repudiandae aspernatur sed repellat quae tenetur."
      />
      <Section
        title="Instamart"
        isVisible={isVisible == "Instamart"}
        setIsVisible={setIsVisible}
        discription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        a ea voluptatum nemo vero culpa cum distinctio illo. Expedita quo
        aspernatur, maxime quasi nesciunt, et, corporis quaerat magni est
        deleniti placeat quisquam nisi odit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dignissimos cumque, sunt nam quo, in esse
        magni porro eos rerum nostrum beatae eum laboriosam, dolorem quidem
        voluptatum harum qui! Cumque itaque placeat dignissimos iure quasi
        officia? Possimus fugit earum distinctio, necessitatibus laborum harum
        molestias doloribus dignissimos iste quaerat quia architecto deleniti
        veniam magni, totam ut consequatur! Labore illo exercitationem soluta
        numquam. Delectus quis asperiores minima eius et aspernatur similique,
        id ad veritatis fugiat debitis, labore, accusantium distinctio nulla
        aperiam ratione officiis dolores nostrum placeat quibusdam temporibus.
        Ad, accusamus provident maxime, sapiente itaque labore molestias ex
        repudiandae aspernatur sed repellat quae tenetur."
      />
    </div>
  );
};

export default Instamart;
