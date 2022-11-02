-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" TEXT,
    "role" INTEGER NOT NULL,
    "office" VARCHAR(50),
    "sector" VARCHAR(50),
    "active" BOOLEAN NOT NULL,
    "name" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "origin" VARCHAR(30) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "amount" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL,
    "amount" INTEGER NOT NULL,
    "requested_user_id" INTEGER NOT NULL,
    "status" INTEGER,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material_Request" (
    "id" SERIAL NOT NULL,
    "amount_received" INTEGER NOT NULL,
    "material_id" INTEGER NOT NULL,
    "request_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Material_Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Material_Request_request_id_key" ON "Material_Request"("request_id");

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_requested_user_id_fkey" FOREIGN KEY ("requested_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Request" ADD CONSTRAINT "Material_Request_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material_Request" ADD CONSTRAINT "Material_Request_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
