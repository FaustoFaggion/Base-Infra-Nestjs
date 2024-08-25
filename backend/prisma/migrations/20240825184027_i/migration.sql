-- CreateTable
CREATE TABLE "DifferentialCylinder" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "series" TEXT,
    "mounting_type" TEXT,
    "bore_diam_mm" INTEGER NOT NULL,
    "rod_diam_mm" INTEGER NOT NULL,
    "max_stroke_length_in_mm" INTEGER NOT NULL,
    "design_principle" TEXT NOT NULL,
    "component_series" TEXT NOT NULL,
    "line_connection" TEXT NOT NULL,
    "line_connection_position_at_head" TEXT NOT NULL,
    "line_connection_position_at_base" TEXT NOT NULL,
    "piston_rod_design" TEXT NOT NULL,
    "piston_rod_end" TEXT NOT NULL,
    "end_piston_cushion" TEXT NOT NULL,
    "oil_type" TEXT NOT NULL,
    "max_pressure_bar" INTEGER NOT NULL,

    CONSTRAINT "DifferentialCylinder_pkey" PRIMARY KEY ("id")
);
