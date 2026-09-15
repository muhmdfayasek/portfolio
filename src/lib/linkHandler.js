export default function linkHandler(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', });
  history.replaceState(null, '', window.location.pathname);
}