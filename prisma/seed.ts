import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clean existing data
  await prisma.activity.deleteMany()
  await prisma.signature.deleteMany()
  await prisma.document.deleteMany()
  await prisma.complianceTask.deleteMany()
  await prisma.subscription.deleteMany()
  await prisma.documentTemplate.deleteMany()
  await prisma.user.deleteMany()
  await prisma.company.deleteMany()

  // Create companies
  const company1 = await prisma.company.create({
    data: {
      name: 'Tech Solutions Pvt Ltd',
      type: 'Private Limited',
      industry: 'Information Technology',
      gstin: '29ABCDE1234F1Z5',
      pan: 'ABCDE1234F',
      cin: 'U74999DL2020PTC123456',
      address: '123 Tech Park, MG Road',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      phone: '9876543210',
      email: 'info@techsolutions.com',
      website: 'https://techsolutions.com',
      employeeCount: 50,
    },
  })

  const company2 = await prisma.company.create({
    data: {
      name: 'StartUp Innovations LLP',
      type: 'LLP',
      industry: 'E-commerce',
      gstin: '27ABCDE5678G2H6',
      pan: 'ABCDE5678G',
      address: '456 Innovation Hub',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      phone: '9876543211',
      email: 'hello@startupinnovations.com',
      employeeCount: 15,
    },
  })

  // Create users
  const hashedPassword = await bcrypt.hash('password123', 10)

  const user1 = await prisma.user.create({
    data: {
      email: 'admin@techsolutions.com',
      name: 'Rajesh Kumar',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      companyId: company1.id,
      emailVerified: true,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'legal@techsolutions.com',
      name: 'Priya Sharma',
      passwordHash: hashedPassword,
      role: 'USER',
      companyId: company1.id,
      emailVerified: true,
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'founder@startupinnovations.com',
      name: 'Amit Patel',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      companyId: company2.id,
      emailVerified: true,
    },
  })

  // Create document templates
  const templates = await Promise.all([
    prisma.documentTemplate.create({
      data: {
        name: 'Employment Agreement',
        category: 'HR',
        description: 'Standard employment agreement template',
        content: `
# EMPLOYMENT AGREEMENT

This Employment Agreement ("Agreement") is entered into on {{date}} between {{companyName}} ("Company") and {{employeeName}} ("Employee").

## 1. POSITION AND DUTIES
The Employee shall serve as {{designation}} and shall perform duties as assigned by the Company.

## 2. COMPENSATION
The Employee shall receive a salary of ₹{{salary}} per annum, payable monthly.

## 3. TERM
This agreement shall commence on {{joiningDate}} and continue until terminated.

## 4. CONFIDENTIALITY
The Employee agrees to maintain confidentiality of all proprietary information.

## 5. TERMINATION
Either party may terminate this agreement with {{noticePeriod}} days notice.

Signed:
Company: _______________________
Employee: _______________________
`,
        fields: JSON.stringify([
          { name: 'date', type: 'date', required: true },
          { name: 'companyName', type: 'text', required: true },
          { name: 'employeeName', type: 'text', required: true },
          { name: 'designation', type: 'text', required: true },
          { name: 'salary', type: 'number', required: true },
          { name: 'joiningDate', type: 'date', required: true },
          { name: 'noticePeriod', type: 'number', required: true },
        ]),
      },
    }),
    prisma.documentTemplate.create({
      data: {
        name: 'Non-Disclosure Agreement',
        category: 'Legal',
        description: 'Standard NDA template',
        content: `
# NON-DISCLOSURE AGREEMENT

This Agreement is entered into on {{date}} between {{partyA}} and {{partyB}}.

## CONFIDENTIAL INFORMATION
Both parties agree to maintain confidentiality of shared information.

## DURATION
This agreement shall remain in effect for {{duration}} years.

Signed:
Party A: _______________________
Party B: _______________________
`,
        fields: JSON.stringify([
          { name: 'date', type: 'date', required: true },
          { name: 'partyA', type: 'text', required: true },
          { name: 'partyB', type: 'text', required: true },
          { name: 'duration', type: 'number', required: true },
        ]),
      },
    }),
    prisma.documentTemplate.create({
      data: {
        name: 'Service Agreement',
        category: 'Business',
        description: 'Service agreement for vendors',
        content: `
# SERVICE AGREEMENT

This Service Agreement is made on {{date}} between {{clientName}} ("Client") and {{vendorName}} ("Service Provider").

## SERVICES
The Service Provider shall provide: {{services}}

## PAYMENT
Total Amount: ₹{{amount}}
Payment Terms: {{paymentTerms}}

## DURATION
Start Date: {{startDate}}
End Date: {{endDate}}

Signed:
Client: _______________________
Service Provider: _______________________
`,
        fields: JSON.stringify([
          { name: 'date', type: 'date', required: true },
          { name: 'clientName', type: 'text', required: true },
          { name: 'vendorName', type: 'text', required: true },
          { name: 'services', type: 'textarea', required: true },
          { name: 'amount', type: 'number', required: true },
          { name: 'paymentTerms', type: 'text', required: true },
          { name: 'startDate', type: 'date', required: true },
          { name: 'endDate', type: 'date', required: true },
        ]),
      },
    }),
  ])

  // Create sample documents
  const documents = await Promise.all([
    prisma.document.create({
      data: {
        title: 'Employment Agreement - John Doe',
        type: 'CONTRACT',
        category: 'HR',
        content: 'Employment agreement content for John Doe...',
        status: 'SIGNED',
        companyId: company1.id,
        userId: user1.id,
        templateId: templates[0].id,
        aiGenerated: true,
      },
    }),
    prisma.document.create({
      data: {
        title: 'NDA with ABC Corp',
        type: 'AGREEMENT',
        category: 'Legal',
        content: 'Non-disclosure agreement with ABC Corporation...',
        status: 'DRAFT',
        companyId: company1.id,
        userId: user2.id,
        templateId: templates[1].id,
      },
    }),
    prisma.document.create({
      data: {
        title: 'Vendor Service Agreement',
        type: 'CONTRACT',
        category: 'Business',
        content: 'Service agreement with XYZ Vendors...',
        status: 'REVIEW',
        companyId: company2.id,
        userId: user3.id,
        templateId: templates[2].id,
      },
    }),
  ])

  // Create compliance tasks
  const tasks = await Promise.all([
    prisma.complianceTask.create({
      data: {
        title: 'File GST Return - December 2024',
        description: 'Monthly GST return filing',
        type: 'TAX',
        category: 'GST',
        dueDate: new Date('2025-01-10'),
        status: 'PENDING',
        priority: 'HIGH',
        companyId: company1.id,
        assignedToId: user2.id,
      },
    }),
    prisma.complianceTask.create({
      data: {
        title: 'Annual ROC Filing',
        description: 'File annual returns with ROC',
        type: 'REGULATORY',
        category: 'Company Law',
        dueDate: new Date('2025-03-31'),
        status: 'PENDING',
        priority: 'HIGH',
        companyId: company1.id,
        assignedToId: user1.id,
      },
    }),
    prisma.complianceTask.create({
      data: {
        title: 'TDS Payment Q3',
        description: 'Quarterly TDS payment',
        type: 'TAX',
        category: 'Income Tax',
        dueDate: new Date('2025-01-07'),
        status: 'IN_PROGRESS',
        priority: 'CRITICAL',
        companyId: company1.id,
        assignedToId: user2.id,
      },
    }),
    prisma.complianceTask.create({
      data: {
        title: 'PF Return Filing',
        description: 'Monthly PF return',
        type: 'REGULATORY',
        category: 'Labor Law',
        dueDate: new Date('2025-01-15'),
        status: 'PENDING',
        priority: 'MEDIUM',
        companyId: company2.id,
        assignedToId: user3.id,
      },
    }),
  ])

  // Create subscriptions
  await Promise.all([
    prisma.subscription.create({
      data: {
        companyId: company1.id,
        plan: 'BUSINESS',
        status: 'ACTIVE',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2025-01-01'),
        amount: 24999,
      },
    }),
    prisma.subscription.create({
      data: {
        companyId: company2.id,
        plan: 'STARTER',
        status: 'ACTIVE',
        startDate: new Date('2024-06-01'),
        endDate: new Date('2025-06-01'),
        amount: 9999,
      },
    }),
  ])

  // Create activities
  await Promise.all([
    prisma.activity.create({
      data: {
        type: 'DOCUMENT_CREATED',
        description: 'Created employment agreement',
        userId: user1.id,
      },
    }),
    prisma.activity.create({
      data: {
        type: 'TASK_ASSIGNED',
        description: 'Assigned GST filing task',
        userId: user2.id,
        taskId: tasks[0].id,
      },
    }),
  ])

  console.log('✅ Database seeded successfully!')
  console.log('Test credentials:')
  console.log('Email: admin@techsolutions.com')
  console.log('Password: password123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })