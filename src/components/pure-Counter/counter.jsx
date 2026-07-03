import "../pure-Counter/counter.css";

function counting({ start, end, durition, text }) {
  return (
    <>
      <div className="div-counter text-dark d-block w-100 fw-bold fs-3 rounded-5 shadow p-3">
        <span
          className="purecounter mt-3"
          data-purecounter-start={start}
          data-purecounter-end={end}
          data-purecounter-duration={durition}
        ></span>
        <p style={{ fontFamily: "Lalezar" }} className="mt-4 fs-5">
          {text}
        </p>
      </div>
    </>
  );
}

export default counting;
