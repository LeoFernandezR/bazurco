const clientsImages = import.meta.glob(
  "../assets/clients/*.{png,jpg,jpeg,svg}",
  {
    import: "default",
  }
);

export { clientsImages };
