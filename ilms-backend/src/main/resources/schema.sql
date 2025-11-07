-- Schema for ILMS SQLite

CREATE TABLE IF NOT EXISTS material_master (
  material_code TEXT PRIMARY KEY,
  material_name TEXT NOT NULL,
  description TEXT,
  sku TEXT,
  ean_gtin TEXT,
  upc TEXT,
  country_of_origin TEXT,
  type TEXT,
  material_class TEXT,
  material_group TEXT,
  gs1_category_code TEXT,
  shelf_life_days INTEGER,
  storage_type TEXT,
  procurement_type TEXT,
  baseuom TEXT,
  net_weight_kg REAL,
  dimensionsmm TEXT,
  tradeuom TEXT,
  trade_weight_kg REAL,
  trade_dimensionsmm TEXT,
  is_packaged INTEGER,
  is_fragile INTEGER,
  is_env_sensitive INTEGER,
  is_high_value INTEGER,
  is_batch_managed INTEGER,
  packaging_material_code TEXT,
  is_serialized INTEGER,
  externalerpcode TEXT,
  item_weight TEXT,
  item_dimension TEXT,
  max_storage_period TEXT,
  material_eanupc TEXT
);

CREATE TABLE IF NOT EXISTS handling_parameter (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  material_code TEXT UNIQUE,
  temperature_min REAL,
  temperature_max REAL,
  humidity_min REAL,
  humidity_max REAL,
  hazardous_class TEXT,
  precautions TEXT,
  env_parameters TEXT,
  epc_format TEXT,
  FOREIGN KEY(material_code) REFERENCES material_master(material_code) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS material_image (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  material_code TEXT,
  type TEXT,
  filename TEXT,
  url TEXT,
  FOREIGN KEY(material_code) REFERENCES material_master(material_code) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS material_document (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  material_code TEXT,
  doc_type TEXT,
  filename TEXT,
  url TEXT,
  FOREIGN KEY(material_code) REFERENCES material_master(material_code) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS packaging_hierarchy (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  activation_from TEXT,
  activation_to TEXT,
  packaging_capacity_constraints INTEGER,
  gtin_assignment_format TEXT,
  description TEXT
);

CREATE TABLE IF NOT EXISTS packaging_level (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hierarchy_id INTEGER,
  level_index INTEGER,
  level_code TEXT,
  level_name TEXT,
  contained_quantity INTEGER,
  dimensionsmm TEXT,
  weightkg REAL,
  capacity_units TEXT,
  id_tech TEXT,
  barcode_type TEXT,
  rfid_tag_type TEXT,
  epc_format TEXT,
  label_template TEXT,
  gtin_format TEXT,
  default_label_copies INTEGER,
  is_returnable INTEGER,
  is_serialized INTEGER,
  FOREIGN KEY(hierarchy_id) REFERENCES packaging_hierarchy(id) ON DELETE CASCADE
);

-- Users for authentication
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL
);
