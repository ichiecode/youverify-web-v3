export default function (date, options = { year: "numeric", month: "long", day: "numeric" }) {
    return new Date(date).toLocaleDateString("en-US", options);
}