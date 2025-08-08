-- CreateTable
CREATE TABLE "ForgottenPasswordLink" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ForgottenPasswordLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ForgottenPasswordLink" ADD CONSTRAINT "ForgottenPasswordLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
